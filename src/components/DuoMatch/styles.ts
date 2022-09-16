import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: THEME.COLORS.OVERLAY
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 311,
    paddingBottom: 32,
    borderRadius: 8,
    backgroundColor: THEME.COLORS.SHAPE
  },

  closeIcon: {
    alignSelf: 'flex-end',
    margin: 16
  },

  label: {
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
    color: THEME.COLORS.TEXT,
    marginTop: 24,
    marginBottom: 8,
    fontSize: THEME.FONT_SIZE.MD
  },

  discordButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 231,
    height: 48,
    backgroundColor: THEME.COLORS.BACKGROUND_900,
    borderRadius: 4,
  },

  discord: {
    color: THEME.COLORS.TEXT,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    fontSize: THEME.FONT_SIZE.MD
  }
});