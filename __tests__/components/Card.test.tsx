import {  render, screen } from '@testing-library/react';
import { Card } from '@/components/Card';
import cardPropMock from '../../mocks/cardPropMock';
import '@testing-library/user-event';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import * as useUser from '@auth0/nextjs-auth0/client';
import TanStackProvider from '@/tanstack/TanStackProvider';

describe('Card Tests', () => {
  beforeEach(() => render(
    <TanStackProvider>  
      <UserProvider>
        <Card immobile={cardPropMock} />
      </UserProvider> 
    </TanStackProvider> 
  ));

  it('01 - should be rendered correctly on screen when user is online', async () => {
    const name = 'test';
    const useUserSpy = jest.spyOn(useUser, 'useUser');
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
    });

    const immobilePhotos = screen.getAllByRole('img', { name: /immobile photo/i });
    const title = screen.getByRole('heading', { level: 3, name: /apartamento, itapipoca/i });
    const saveBtn = await screen.getByTestId(/bookmarkicon/i);
    const unSaveBtn = screen.queryByTestId(/bookmarkfillicon/i);
    const immobileDescription = 
    screen.getByText(/apartamento espaçoso com 70m², 2 quartos, sendo uma suíte, e com um banheiro social/i);
    const bedRoomQty = screen.getByTestId(/bedRoomQty/i);
    const parkingQty = screen.getByTestId(/parkingQty/i);
    const bathroomsQty = screen.getByTestId(/bathroomsQty/i);
    const rentBtn = screen.getByRole('link', { name: /alugar/i });

    expect(immobilePhotos.length).toEqual(2);
    expect(title).toBeInTheDocument();
    expect(saveBtn).toBeInTheDocument();
    expect(unSaveBtn).toBeNull();
    expect(immobileDescription).toBeInTheDocument();
    expect(bedRoomQty.innerHTML).toEqual('2');
    expect(parkingQty.innerHTML).toEqual('0');
    expect(bathroomsQty.innerHTML).toEqual('2');
    expect(rentBtn).toBeInTheDocument();
  });

  // it.skip('02 - should be possible to favorite a immobile when user is online', async () => {
  //     const name = 'test'
  //     const useUserSpy = jest.spyOn(useUser, 'useUser')
  //     useUserSpy.mockReturnValue({
  //       user: {
  //         email: 'test@test.com.br',
  //         email_verified: true,
  //         name,
  //         nickname: 'test20',
  //         picture :  'https://test.png',
  //         org_id: 'testorg',

  //       },
  //       isLoading: false ,
  //       checkSession: jest.fn(),
  //     })

  //   const saveBtn = screen.getByTestId(/bookmarkicon/i);
  //   const unSaveBtnBeforeClick = screen.queryByTestId(/bookmarkfillicon/i);

  //   expect(unSaveBtnBeforeClick).toBeNull();
    
  //   act(() => saveBtn.click())
    
  //   await waitFor(() => {
  //     const saveBtnAfterClicked = screen.queryByTestId(/bookmarkicon/i);
  //     const unSaveBtn = screen.getByTestId(/bookmarkfillicon/i);
  //     expect(unSaveBtn).toBeInTheDocument();
  //     expect(saveBtnAfterClicked).toBeNull();
  //   }, { timeout: 3000})  

  // })

  //   it('03 - should open dialog when user is offline', async () => {
  //   const dialogTrigger = screen.getByTestId(/bookmarkicon/i);

  //   act(() => dialogTrigger.click())

  //   const dialog = await screen.getByTestId(/dialog/i)
  
//   expect(dialog).toBeInTheDocument();
// })
});

