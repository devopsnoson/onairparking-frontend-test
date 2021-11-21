import ReservationStore from '../ReservationStore';
import fetch from 'jest-fetch-mock';
jest.mock('../../services/reservationService');

describe('ReservationStore', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it('should get all grouped dates', async () => {
    const store = new ReservationStore();

    //Some simple tests
    expect(store.groupedDates).not.toBeUndefined();
    expect(store.groupedDates).not.toBeNull();
    expect(store.groupedDates.length).toBe(0);

    const facility = { facility_id: 26 };
    await store.loadDailyRates(facility);

    expect(store.groupedDates).not.toBeUndefined();
    expect(store.groupedDates).not.toBeNull();
    expect(store.groupedDates.length).toBeGreaterThan(0);
  });
});
