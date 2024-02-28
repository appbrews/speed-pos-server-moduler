import { Router } from 'express';
import { AuthRoutes } from '../modules/auth/auth.route';
import { FeedbackRoutes } from '../modules/feedback/feedback.route';
import { MemberRoutes } from '../modules/member/member.route';
import { NewsletterRoutes } from '../modules/newsletter/newsletter.route';
import { UserRoutes } from '../modules/user/user.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/members',
    route: MemberRoutes,
  },
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/feedback',
    route: FeedbackRoutes,
  },
  {
    path: '/newsletter',
    route: NewsletterRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
