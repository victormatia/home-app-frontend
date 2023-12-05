import {  act, render, screen } from '@testing-library/react'
import { UserProvider } from '@auth0/nextjs-auth0/client';
import TanStackProvider from '@/tanstack/TanStackProvider';
import GlobalProvider from '@/context/GlobalProvider';
import MostUsedFiltersList from '@/components/MostUsedFiltersList';
import userEvent from '@testing-library/user-event';


const renderComponent = () => { 
  render(
    <TanStackProvider>
      <UserProvider>
        <GlobalProvider>
          <MostUsedFiltersList />
        </GlobalProvider>
      </UserProvider>
    </TanStackProvider>
)}



describe('Header Tests', () => {
  it('01 - should be rendered correctly on screen', async () => {
    // arrange
    renderComponent()

    const highlightedButton = screen.getByRole('button', {name: /destaques/i})
    const buttonsList = screen.getAllByRole('button')

    // assert
    expect(highlightedButton).toBeInTheDocument()
    expect(buttonsList.length).toEqual(5)
  });

    it('02 - should change background color after click in the button', async () => {

      // arrange
      renderComponent()
      const petFriendlyButton = screen.getByRole('button', {name: /aceita pet/i})
      //assert
      expect(petFriendlyButton.className).toContain('bg-[#C1C1C1]')
      // act
      await act(() => userEvent.click(petFriendlyButton))
      const petFriendlyButtonAfterClick = screen.getByRole('button', {name: /aceita pet/i})
      // assert
       expect(petFriendlyButtonAfterClick.className).toContain('bg-primaryBlue')
    });


})
