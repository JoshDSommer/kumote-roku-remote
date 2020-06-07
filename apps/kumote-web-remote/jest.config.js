module.exports = {
  name: 'kumote-web-remote',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/kumote-web-remote',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
