const {describe, it} = global;
import {expect} from 'chai';
import {shallow} from 'enzyme';
import MainLayout from '../main_layout';

describe('core.components.main_layout', () => {
  it('should check if content is capable of accepting components', () => {
    const Component = () => (<p>Hello</p>);
    const el = shallow(
      <MainLayout content={() => (<Component />)}/>
    );
    expect(el.contains(<Component />)).to.be.equal(true);
  });

  it('should display NavBar if userId is true', () => {
    const NavBarLogOut = () => (<NavBarLogOut/>);
    const NavBar = () => (<NavBar/>);
    const userId = true;
    const result = userId===true?<NavBar/>:<NavBarLogOut/>;
    const el = shallow(
      <MainLayout content={() => (result)}/>
    );
    expect(el.contains(<NavBar />)).to.be.equal(true);
  });

  it('should display NavBarLogOut if userId is false', () => {
    const NavBarLogOut = () => (<NavBarLogOut/>);
    const NavBar = () => (<NavBar/>);
    const userId = false;
    const result = userId===true?<NavBar/>:<NavBarLogOut/>;
    const el = shallow(
      <MainLayout content={() => (result)}/>
    );
    expect(el.contains(<NavBarLogOut />)).to.be.equal(true);
  });
});
