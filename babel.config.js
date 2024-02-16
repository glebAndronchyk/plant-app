module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      // 'react-native-dotenv',
      {
        alias: {
          src: '.',
          '@components': './src/components',
          '@screens': './src/screens',
          '@styled': './src/components/styled/index',
          '@theme': './src/theme',
          '@utils': './src/utils',
          '@icons': './src/assets/icons',
          '@images': './src/assets/images',
          '@app_types': './src/types',
          '@hooks': './src/hooks',
          '@navigators': './src/navigators/index',
          '@store': './src/store',
          '@animations': './src/animations',
          '@navigation': './src/navigation',
          '@asyncStorage': './src/asyncStorage',
          '@API': './src/API/index',
          '@constants': './src/constants',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
