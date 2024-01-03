module.exports = (api) => {
  const isDevelopment = api.env('development');
  return {
    presets: [
      '@babel/preset-env',
      [
        '@babel/preset-react',
        {
          runtime: 'automatic',
          development: isDevelopment,
        },
      ],
      '@babel/preset-typescript',
    ],
    plugins: [
      [
        '@babel/plugin-transform-react-jsx',
        {
          runtime: 'automatic',
        },
      ],
      ...(process.env.NODE_ENV === 'development'
        ? ['react-refresh/babel']
        : []),
    ],
  };
};
