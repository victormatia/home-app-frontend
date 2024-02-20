import { render, screen } from '@testing-library/react';
import "@testing-library/user-event"
import ProfileBox from '@/components/Profile/ProfileBox';
import axios from 'axios';
import TanStackProvider from '@/tanstack/TanStackProvider';





describe('Profile Box Tests', () => {
  beforeEach(() => render(
        <TanStackProvider>
          <ProfileBox/>
        </TanStackProvider>
  ));

  it('01 - should be rendered correctly on screen',  () => {
    let functioSpy: jest.SpyInstance
    functioSpy = jest.spyOn(axios, 'get')
      functioSpy.mockReturnValue({
          data: {
          name: 'test',
          email: 'test@test.com',
          cpf: '000.000.000-00'
          }
      } )

    const name = screen.findByText(/test/i)

    expect(name).toBeInTheDocument();

  });

});

