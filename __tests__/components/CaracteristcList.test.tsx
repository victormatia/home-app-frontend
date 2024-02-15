import { render, screen } from '@testing-library/react'
import { CaracteristListProps, CaracteristicList } from '@/components/ImmobilePage/CaracteristcList';

const caracteristcListTrueMock: CaracteristListProps = {
  bathroomsQty: 1,
  bedroomsQty: 2,
  parkingQty: 1,
  petFriendly: true,
  sqrFootage: 50
}

const caracteristcListFalseMock: CaracteristListProps = {
  bathroomsQty: 0,
  bedroomsQty: 0,
  parkingQty: 0,
  petFriendly: false,
  sqrFootage: 50
}


describe('Caracteristc List Tests', () => {
  it('01 - should be rendered correctly on screen with true asserts', async () => {
    // arrange
    render(
    <CaracteristicList
      bathroomsQty={caracteristcListTrueMock.bathroomsQty} 
      bedroomsQty={caracteristcListTrueMock.bedroomsQty} 
      parkingQty={caracteristcListTrueMock.parkingQty} 
      petFriendly={caracteristcListTrueMock.petFriendly} 
      sqrFootage={caracteristcListTrueMock.sqrFootage}
    />)

    const bathroomsQty = screen.getByText(/banheiros/i);
    const bedroomsQty = screen.getByText(/quartos/i);
    const parkingQty = screen.getByText(/vagas/i);
    const petFriendly = screen.getByText(/aceita pet/i);
    const sqrFootage = screen.getByText(/m²/i);


    // assert
    expect(bathroomsQty).toBeInTheDocument();
    expect(bedroomsQty).toBeInTheDocument();
    expect(parkingQty).toBeInTheDocument();
    expect(petFriendly).toBeInTheDocument();
    expect(sqrFootage).toBeInTheDocument();
    

  });

  it('02 - should be rendered correctly on screen with false asserts', async () => {
    // arrange
    render(
    <CaracteristicList
      bathroomsQty={caracteristcListFalseMock.bathroomsQty} 
      bedroomsQty={caracteristcListFalseMock.bedroomsQty} 
      parkingQty={caracteristcListFalseMock.parkingQty} 
      petFriendly={caracteristcListFalseMock.petFriendly} 
      sqrFootage={caracteristcListFalseMock.sqrFootage}
    />)

    const bathroomsQty = screen.getByText(/sem banheiros/i);
    const bedroomsQty = screen.getByText(/sem quartos/i);
    const parkingQty = screen.getByText(/sem vagas/i);
    const sqrFootage = screen.getByText(/m²/i);


    // assert
    expect(bathroomsQty).toBeInTheDocument();
    expect(bedroomsQty).toBeInTheDocument();
    expect(parkingQty).toBeInTheDocument();
    expect(sqrFootage).toBeInTheDocument();
    

  });

 
})
