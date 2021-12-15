import { render, screen, waitFor } from '@testing-library/react';
import App from './App';
const animeList = [
  {
    image_url:
      'https://cdn.myanimelist.net/images/anime/1223/96541.jpg?s=faffcb677a5eacd17bf761edd78bfb3f',
    title: 'Fullmetal Alchemist: Brotherhood',
  },
  {
    image_url:
      'https://cdn.myanimelist.net/images/anime/3/72078.jpg?s=e9537ac90c08758594c787ede117f209',
    title: 'Gintama°',
  },
];

function SingleAnime() {
  return (
    <div className="animeList">
      {animeList.map((anime, index) => {
        if (animeList.length === index + 1) {
          return (
            <div className="singleAnime" key={anime.title}>
              <img src={anime.image_url} />
              <p data-testid={anime.title}>{anime.title}</p>
            </div>
          );
        }
      })}
    </div>
  );
}

test('renders learn react link', async () => {
  const { container, getByText } = render(<SingleAnime />);

  const labelAfterGet = await waitFor(() => getByText(/Gintama°/));

  expect(labelAfterGet).toBeTruthy();
});
test('renders learn', async () => {
  const { getByText } = render(<App />);
  const linkElement = getByText('Loading...');
  expect(linkElement).toBeInTheDocument();
});
