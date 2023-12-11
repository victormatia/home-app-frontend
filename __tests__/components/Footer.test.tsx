import { render, screen } from '@testing-library/react'
import { Footer } from '@/components/Footer';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import TanStackProvider from '@/tanstack/TanStackProvider';
import GlobalProvider from '@/context/GlobalProvider';
import * as useUser from '@auth0/nextjs-auth0/client'

const renderComponent = () => { 
  render(
    <TanStackProvider>
      <UserProvider>
        <GlobalProvider>
          <Footer />
        </GlobalProvider>
      </UserProvider>
    </TanStackProvider>
)}



describe('Footer Tests', () => {
  it('01 - should be rendered correctly on screen', async () => {
    // arrange
    renderComponent()
    const homeButton = screen.getByRole('link', {name: /buscar/i})
    const advertiseButton = screen.getByRole('link', {name: /anunciar/i})
    const favoritesButton = screen.getByRole('link', {name: /favoritos/i})
    const loginButton = await screen.findByRole('link', {name: /login/i})

    // assert
    expect(homeButton).toBeInTheDocument();
    expect(advertiseButton).toBeInTheDocument();
    expect(favoritesButton).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
  });


    it('02 - should profile icon is render correctly ', async () => {
      // arrange
      renderComponent()
      const name = 'test'
      const useUserSpy = jest.spyOn(useUser, 'useUser')
      useUserSpy.mockReturnValue({
        user: {
          email: 'test@test.com.br',
          email_verified: true,
          name,
          nickname: 'test20',
          picture :  'https://test.png',
          org_id: 'testorg',

        },
        isLoading: false ,
        checkSession: jest.fn(),
      })
      const profilePicture = await screen.findByRole('img', {name: /profile/i})
      const profileButton = screen.getByRole('link', {name: /perfil/i}) 
     
      // assert
     expect(profilePicture).toBeInTheDocument()
     expect(profileButton.getAttribute('href')).toBe('/profile')
    });
})
