import React from 'react/addons';
import KladrapiReact from '../lib/kladrapi-react.jsx';

describe('KladrapiReact', function() {
  var component;

  beforeEach(function() {
    component = React.addons.TestUtils.renderIntoDocument(
      <KladrapiReact/>
    );
  });

  it('should render', function() {
    expect(component.getDOMNode().className).toEqual('kladrapi-react');
  });
});
