import axios from "axios";
import { useState, useEffect } from "react";
import { Button, Card, Row, Dropdown, DropdownButton } from "react-bootstrap";

const GIPHY_URL = "https://api.giphy.com/v1/gifs";
const API_KEY = "WqCf42eGdmX0mg4iKYuvvMor68YlahOA";

const GiphyViewer = () => {
  const [gifs, setGifs] = useState([]);
  const [term, setTerm] = useState("");
  const [limit, setLimit] = useState(15);

  useEffect(() => {
    axios
      .get(`${GIPHY_URL}/trending?api_key=${API_KEY}&limit=${limit}`)
      .then((response) => {
        setGifs(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [limit]);

  const handleChange = (e) => setTerm(e.target.value);

  const handleKeyUp = (e) => {
    if (e.key === "Enter") searchGif();
  };

  const searchGif = () => {
    if (!term) {
      alert("Please enter a search term");
      return;
    }

    axios
      .get(
        `${GIPHY_URL}/search?api_key=${API_KEY}&q=${term}&limit=${limit}`
      )
      .then((response) => {
        setGifs(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });

    setTerm("");
  };

  const getTrending = () => {
    axios
      .get(`${GIPHY_URL}/trending?api_key=${API_KEY}&limit=${limit}`)
      .then((response) => {
        setGifs(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const getRandom = () => {
    axios
      .get(`${GIPHY_URL}/random?api_key=${API_KEY}`)
      .then((response) => {
        setGifs([response.data.data]);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleSelect = (amount) => setLimit(Number(amount));

  return (
    <div className="search">
      <input
        type="text"
        value={term}
        onChange={handleChange}
        onKeyUp={handleKeyUp}
        placeholder="Search GIFs..."
      />

      <div className="flex gap-2 my-3">
        <Button variant="primary" onClick={searchGif}>
          Search
        </Button>
        <Button variant="info" onClick={getTrending}>
          Trending
        </Button>
        <Button variant="warning" onClick={getRandom}>
          Random
        </Button>

        <DropdownButton
          size="sm"
          title={`Limit: ${limit}`}
          variant="secondary"
          onSelect={handleSelect}
        >
          <Dropdown.Item eventKey={15}>15</Dropdown.Item>
          <Dropdown.Item eventKey={20}>20</Dropdown.Item>
          <Dropdown.Item eventKey={25}>25</Dropdown.Item>
          <Dropdown.Item eventKey={50}>50</Dropdown.Item>
        </DropdownButton>
      </div>

      <Row className="g-4" md={3} xs={1}>
        {gifs.map((g) => (
          <GifCard
            key={g.id}
            title={g.title}
            url={g.url}
            image={g.images.fixed_width.url}
          />
        ))}
      </Row>
    </div>
  );
};

const GifCard = ({ title, url, image }) => {
  return (
    <Card>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>
          <a href={url} target="_blank" rel="noreferrer">
            {title}
          </a>
        </Card.Title>
      </Card.Body>
    </Card>
  );
};

export default GiphyViewer;
