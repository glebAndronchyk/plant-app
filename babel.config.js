module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    'nativewind/babel',
    [
      'module-resolver',
      {
        alias: {
          src: './',
          '@components': './src/components',
          '@screens': './src/screens',
        },
      },
    ],
  ],
};
