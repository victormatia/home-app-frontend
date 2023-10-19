import { TImmobile, TRankedImmobile } from '../types/index';
import removeDiacriticals from './diacriticalConversion';
const filterImmobilesByTerms = ( immobiles: TImmobile[], search: string) : TRankedImmobile[] => {
  const allUniqueTermsList = Array.from(new Set(search.split(/[ ,.]+/)));
  
  const RankedImmobilesList = allUniqueTermsList.reduce((acc: TRankedImmobile[], term) => {
    const ImmobilesFilteredByTerm = immobiles.filter((immobile) => {
      const formatedStreet = removeDiacriticals(immobile.address?.street.toLowerCase() as string);
      const formatedCity = removeDiacriticals(immobile.address?.city.toLowerCase() as string);
      return formatedStreet.includes(removeDiacriticals(term.toLocaleLowerCase()))
      || formatedCity.includes(removeDiacriticals(term.toLocaleLowerCase()));
    });

    ImmobilesFilteredByTerm.forEach((immobile) => {
      const immobileRankedId = acc.find((immo) => immo.immobileId === immobile.id)?.immobileId;
      
      if (immobileRankedId) {
        acc.forEach((immobile) => {
          if (immobile.immobileId === immobileRankedId) immobile.rank += 1;
        });

      } else {
        acc.push({
          immobileId: immobile.id,
          immobile: immobile,
          rank: 1,
        });
      }
    });

    return acc;
  }, []);
  console.log(RankedImmobilesList.sort((a, b) => b.rank - a.rank));
  return RankedImmobilesList.sort((a, b) => b.rank - a.rank);
};

export default filterImmobilesByTerms;