'use strict';

describe('SrcApp', () => {
  let React = require('react/addons');
  let SrcApp, component;

  beforeEach(() => {
    let container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    SrcApp = require('components/SrcApp.js');
    component = React.createElement(SrcApp);
  });

  it('should create a new instance of SrcApp', () => {
    expect(component).toBeDefined();
  });
});
