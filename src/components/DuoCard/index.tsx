import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { THEME } from '../../theme';
import { DuoInfo } from './DuoInfo';
import {GameController} from "phosphor-react-native";
import { styles } from './styles';

export interface DuoCardProps {
  hourEnds: string,
    hourStart: string,
    id: string,
    name: string,
    useVoiceChannel: boolean,
    weekDays: string[], 
    yearsPlaying: number,
} 

interface Props {
  data: DuoCardProps,
  onConnect: () => void
}

export function DuoCard({data, onConnect}: Props) {
  return (
    <View style={styles.container}>
      <DuoInfo 
        label='nome'
        value={data.name}
      />
      
      <DuoInfo 
        label='Tempo de jogo'
        value={`${data.yearsPlaying} anos`}
      />
      
      <DuoInfo 
        label='Disponibilidade '
        value={`${data.weekDays.length} dias \u2022 ${data.hourStart}h - ${data.hourEnds}h`}
      />
      
      <DuoInfo 
        label='Chamada de áudio?'
        value={data.useVoiceChannel ? "Sim" : "Não"}
        colorValue={data.useVoiceChannel ?THEME.COLORS.SUCCESS : THEME.COLORS.ALERT}
      />

      <TouchableOpacity 
        onPress={onConnect}
        style={styles.button}
      >
        <GameController
          color={THEME.COLORS.TEXT}
          size={24}
        />
        <Text style={styles.buttonTitle}>Conectar</Text>
      </TouchableOpacity>

    </View>
  );
}