export const PORT = process.env.PORT || 5000;
export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
};

const uriServerSHOP = "https://server-compushop-production.up.railway.app"
const uriLocalServerSHOP = "http://localhost:4000"

export const urlServer = uriServerSHOP