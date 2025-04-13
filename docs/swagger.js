import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import userSchema from './schemas/user.js';
import movieSchema from './schemas/movie.js';
import reviewSchema from './schemas/review.js';
import watchlistSchema from './schemas/watchlist.js';
import authPaths from './paths/auth.js';
import userPaths from './paths/user.js';
import moviePaths from './paths/movie.js';
import reviewPaths from './paths/review.js';
import watchlistPaths from './paths/watchlist.js';

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API для работы с фильмами',
      version: '1.0.0',
      description:
        'Документация для API, которое позволяет управлять фильмами, отзывами, списками и пользователями.',
    },
    components: {
      schemas: {
        User: userSchema,
        Movie: movieSchema,
        Review: reviewSchema,
        Watchlist: watchlistSchema,
      },
      securitySchemes: {
        BearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
    security: [{ BearerAuth: [] }],
    paths: {
      ...authPaths,
      ...userPaths,
      ...moviePaths,
      ...reviewPaths,
      ...watchlistPaths,
    },
  },
  apis: [],
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

export default function setupSwagger(app) {
  app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}
