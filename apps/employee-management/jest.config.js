module.exports = {
  name: 'employee-management',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/employee-management/',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
