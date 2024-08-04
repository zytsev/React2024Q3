// import { render, screen, fireEvent } from '@testing-library/react';
// import { BrowserRouter } from 'react-router-dom';
// import App from './App';
// import { Provider } from 'react-redux';
// import configureStore, { MockStoreEnhanced } from 'redux-mock-store';

// describe('App', () => {
//   const middlewares: number[] = [];
//   const mockStore = configureStore(middlewares);
//   const initialState = {};
//   const store = mockStore(initialState);

//   function renderComponents(store: MockStoreEnhanced<unknown>) {
//     return render(
//       <Provider store={store}>
//         <BrowserRouter>
//           <App />
//         </BrowserRouter>
//       </Provider>
//     );
//   }

//   it('Main page renders', async () => {
//     renderComponents(store);

//     fireEvent.click(screen.getByText('Search'));
//     expect(await screen.findAllByText(/$/));
//   });
//   it('Pagination page renders', async () => {
//     renderComponents(store);

//     fireEvent.click(screen.getByText('Search'));
//     expect(await screen.findAllByText('Show on page:'));
//   });
//   it('Error page renders', () => {
//     renderComponents(store);

//     fireEvent.click(screen.getByText('Error'));
//     expect(screen.getByText('Page not found :-/'));
//   });
// });
