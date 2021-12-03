import App from './App';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new EnzymeAdapter() });

test('renders without error', () => {});

test('renders increment button', () => {});

test('renders counter display', () => {});

test('counter display starts at 0', () => {});

test('clicking button increments counter', () => {});
