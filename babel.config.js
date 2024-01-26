module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          src: '.',
          '@components': './src/components',
          '@screens': './src/screens',
          '@styled': './src/components/styled/index',
          '@theme': './src/theme',
          '@utils': './src/utils',
          '@icons': './src/assets/icons',
          '@app_types': './src/types',
          '@hooks': './src/hooks',
          '@navigators': './src/navigators/index',
          '@store': './src/store',
          '@animations': './src/animations',
          '@navigation': './src/navigation',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
