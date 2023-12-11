import { render, screen,  } from '@testing-library/react'
import Sidebar from '@/components/Sidebar';

describe('SideBar Tests', () => {
  it('01 - should be rendered correctly on screen', () => {
    // arrange
    render(<Sidebar />);

    // act
    const homeLogo = screen.getByRole('img', { name:  /home-logo/i });
    const links = screen.getAllByRole('link');

    // assert
    expect(homeLogo).toBeInTheDocument();
    expect(links.length).toEqual(4);
  });
})
