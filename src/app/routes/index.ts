import { Router } from 'express';
import { AuthRoutes } from '../modules/auth/auth.route';
import { MemberRoutes } from '../modules/member/member.route';
import { UserRoutes } from '../modules/user/user.route';
import { FeedbackRoutes } from '../modules/feedback/feedback.route';

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
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
