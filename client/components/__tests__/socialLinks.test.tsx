import { configure, shallow } from 'enzyme'
import React from 'react'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import SocialLinks from '../socialLinks';

configure({ adapter: new Adapter() })

describe('<SocialLinks />', () => {
  it('renders the componenet', () => {
    const wrapper = shallow(<SocialLinks />)
    expect(wrapper.find('BsLinkedin').length).toBe(1)
    expect(wrapper.find('BsGithub').length).toBe(1)
  })
})
