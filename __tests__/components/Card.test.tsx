import { act, render, screen } from '@testing-library/react'
import { Card } from "@/components/Card";
import cardPropMock from '../../mocks/cardPropMock';
import "@testing-library/user-event"

describe('Card Tests', () => {
  beforeEach(() => render(<Card immobile={cardPropMock} />));

  it('01 - should be rendered correctly on screen', () => {
    const immobilePhotos = screen.getAllByRole('img', { name: /immobile photo/i });
    const title = screen.getByRole('heading', { level: 3, name: /apartamento, itapipoca/i })
    const saveBtn = screen.getByTestId(/bookmarkicon/i);
    const unSaveBtn = screen.queryByTestId(/bookmarkfillicon/i);
    const immobileDescription = screen.getByText(/apartamento espaçoso com 70m², 2 quartos, sendo uma suíte, e com um banheiro social/i);
    const bedRoomQty = screen.getByTestId(/bedRoomQty/i);
    const parkingQty = screen.getByTestId(/parkingQty/i);
    const bathroomsQty = screen.getByTestId(/bathroomsQty/i);
    const rentBtn = screen.getByRole('button', { name: /alugar/i });

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

  it('02 - should be possible to favorite a immobile', () => {
    const saveBtn = screen.getByTestId(/bookmarkicon/i);
    const unSaveBtnBeforeClick = screen.queryByTestId(/bookmarkfillicon/i);

    expect(unSaveBtnBeforeClick).toBeNull();
    
    act(() => saveBtn.click())
    
    const saveBtnAfterClicked = screen.queryByTestId(/bookmarkicon/i);
    const unSaveBtn = screen.getByTestId(/bookmarkfillicon/i);

    expect(unSaveBtn).toBeInTheDocument();
    expect(saveBtnAfterClicked).toBeNull();
  })
});

