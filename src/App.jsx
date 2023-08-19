
import Form from "./components/Form";
import ListGroup from "./components/Listgroup";
import { RatingProvider } from "./context/RatingContext";
import RatingDetail from "./components/Ratingdetail";

const App = () => {
  return (
    <RatingProvider>
      <div className="container p-5">
        <h1 className="display-2 text-center">Rating App</h1>
        <Form />
        <RatingDetail />
        <ListGroup />
      </div>
    </RatingProvider>
  );
};

export default App;
