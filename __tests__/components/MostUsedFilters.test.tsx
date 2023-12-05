import {  act, render, screen } from '@testing-library/react'
import { UserProvider } from '@auth0/nextjs-auth0/client';
import TanStackProvider from '@/tanstack/TanStackProvider';
import GlobalProvider from '@/context/GlobalProvider';
import MostUsedFiltersList from '@/components/MostUsedFiltersList';
import userEvent from '@testing-library/user-event';

const afterClickClass = "rounded-2xl bg-primaryBlue text-white py-1 px-3 font-medium   before:bg-[#FF6F6F] before:text-white before:flex before:items-center before:justify-center    before:content-['\\2716'] before:absolute before:top-[-3px] before:right-[-3px]    before:rounded-full before:w-4 before:h-4 before:text-[10px] before:p-2"

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
      expect(petFriendlyButton.className).toBe('rounded-2xl bg-[#C1C1C1] text-white py-1 px-3')
      // act
      await act(() => userEvent.click(petFriendlyButton))
      const petFriendlyButtonAfterClick = screen.getByRole('button', {name: /aceita pet/i})
      // assert
       expect(petFriendlyButtonAfterClick.className).toBe(afterClickClass)
    });


})
