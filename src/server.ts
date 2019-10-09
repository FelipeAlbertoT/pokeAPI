import app from "./app";
import { PORT } from "./constants/pokeapi.constants";

app.listen(PORT, () => console.log(`listening on port ${PORT}`));