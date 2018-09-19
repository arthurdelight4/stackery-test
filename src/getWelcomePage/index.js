import './js_logger_init';
import fs from 'fs';

const handler = async (event) => {
  // Log http request
  logger.debug(event);

  const responseBody = fs.readFileSync('./welcome.html', 'utf8');
  // Build an HTTP response.
  const response = {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/html'
    },
    body: responseBody
  };

  return response;
}

module.exports.handler = handler;