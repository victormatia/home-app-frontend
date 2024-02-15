import { render, screen } from '@testing-library/react'
import cardPropMock from '../../mocks/cardPropMock';
import "@testing-library/user-event"
import Slider from '@/components/ImmobilePage/Slider';


describe('Slider Tests', () => {
  beforeEach(() => render(<Slider immobile={cardPropMock} />));

  it('01 - should be rendered correctly on screen', () => {
    const immobilePhotos = screen.getAllByRole('img');
    const nextButton =  screen.getByTestId(/nextbutton/i);
    const prevButton =  screen.getByTestId(/prevbutton/i);


    expect(immobilePhotos.length).toEqual(2);
    expect(nextButton).toBeInTheDocument();
    expect(prevButton).toBeInTheDocument();
  });
});

