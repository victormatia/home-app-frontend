import { render, screen } from '@testing-library/react'
import { UserProvider } from '@auth0/nextjs-auth0/client';
import TanStackProvider from '@/tanstack/TanStackProvider';
import GlobalProvider from '@/context/GlobalProvider';
import * as useUser from '@auth0/nextjs-auth0/client'
import ProfileImage from '@/components/Profile/ProfileImage';

const renderComponent = () => { 
  render(
    <TanStackProvider>
      <UserProvider>
        <GlobalProvider>
          <ProfileImage />
        </GlobalProvider>
      </UserProvider>
    </TanStackProvider>
)}



describe('Profile Image Tests', () => {
    it('01 - should profile icon is render correctly', async () => {
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
     
      // assert
     expect(profilePicture).toBeInTheDocument()
    });
})