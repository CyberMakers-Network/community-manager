import app from "./app";
import { logger } from "cyber-logger";

const port = process.env.PORT || 3000;

app.listen(port, () => logger.info(`Server listening on port: ${port}`));
