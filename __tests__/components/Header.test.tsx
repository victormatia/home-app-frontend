import { act, render, screen, waitFor } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { Header } from '@/components/Header';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import TanStackProvider from '@/tanstack/TanStackProvider';
import GlobalProvider from '@/context/GlobalProvider';
import * as useUser from '@auth0/nextjs-auth0/client'

const renderComponent = () => { 
  render(
    <TanStackProvider>
      <UserProvider>
        <GlobalProvider>
          <Header />
        </GlobalProvider>
      </UserProvider>
    </TanStackProvider>
)}



describe('Header Tests', () => {
  it('01 - should be rendered correctly on screen', async () => {
    // arrange
    renderComponent()

    const searchBar = screen.getByPlaceholderText(/Rua 1, Número 2, Bairro 3.../i);
    const searchButton = screen.getByRole('button', {name: /lupa/i});
    const filterButton = screen.getByRole('button', {name: /filter/i});
    const loginButton = await screen.findByRole('link', {name: /login/i})


    // assert
    expect(searchBar).toBeInTheDocument();
    expect(filterButton).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
    expect(searchButton).toBeInTheDocument();
  });

    it('02 - should value change when user type in search bar', async () => {
      // arrange
      renderComponent()
      const searchBar = screen.getByPlaceholderText(/Rua 1, Número 2, Bairro 3.../i);
      // act
      await act(() => userEvent.type(searchBar, 'Hello' ))
      // assert
     expect(searchBar).toHaveValue('Hello')
    });

    it('03 - should profile icon is render correctly', async () => {
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
      const logoutButton = screen.getByRole('link') 
     
      // assert
     expect(profilePicture).toBeInTheDocument()
     expect(logoutButton.getAttribute('href')).toBe('/api/auth/logout')
    });
})
