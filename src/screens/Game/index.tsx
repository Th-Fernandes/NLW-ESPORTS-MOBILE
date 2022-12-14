import { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { FlatList, Image, TouchableOpacity, View,Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import  type { GameParams } from '../../@types/navigation';

import { Background } from '../../components/Background';
import { Heading } from '../../components/Heading';
import { DuoCard, DuoCardProps } from '../../components/DuoCard';
import { DuoMatch } from "../../components/DuoMatch"

import { THEME } from '../../theme';
import { styles } from './styles';
import logoImg from "../../assets/logo-nlw-esports.png"
import {Entypo} from "@expo/vector-icons";

export function Game() {
  const { params } = useRoute();
  const game = params as GameParams;
  
  const { goBack } = useNavigation();

  const [duos, setDuos] = useState<DuoCardProps[]>([]);
  const [discordDuoSelected, setDiscordDuoSelected] = useState('');

  function handleGoBackToHome() {
    goBack()
  }

  async function getDiscordUser(adsId:string){
    fetch(`http://192.168.1.64:3001/ads/${adsId}/discord`)
      .then(res => res.json())
      .then(data => setDiscordDuoSelected(data.discord))

  }

  useEffect(() => {
    fetch(`http://192.168.1.64:3001/games/${game.id}/ads`)
      .then(res => res.json())
      .then(duos => setDuos(duos))
  }, [])


  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleGoBackToHome}>
            <Entypo
              name='chevron-thin-left'
              color={THEME.COLORS.CAPTION_300}
              size={20}
            />
          </TouchableOpacity>

          <Image
            source={logoImg}
            style={styles.logo}
          />

          <View style={styles.right}></View>
        </View>


        <Image
          source={{uri: game.bannerUrl}}
          style={styles.cover}  
          resizeMode="cover"
        />
        <Heading
          title={game.title}
          subtitle='Conecte-se e comece a jogar!'
        />

        <FlatList 
          data={duos}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <DuoCard 
              data={item}
              onConnect={() => getDiscordUser(item.id)} 
            />
          )}
          style={styles.containerList}
          horizontal
          contentContainerStyle={styles.contentList}
          showsHorizontalScrollIndicator={false}
          ListEmptyComponent={() => (
            <Text style={{color: THEME.COLORS.CAPTION_300}}>N??o h?? an??ncios publicados para esse jogo</Text>
          )}
        />

        <DuoMatch 
          visible={discordDuoSelected.length > 0 ? true : false}
          discord="jato#6754"
          onClose={ () => setDiscordDuoSelected('')}
        />
      </SafeAreaView>
    </Background>

    
  );
}