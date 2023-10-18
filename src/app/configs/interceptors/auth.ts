import { HttpHandlerFn, HttpRequest } from '@angular/common/http';

export function AuthInterceptor(
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
) {
  let jwtToken = '';
  if (typeof localStorage !== 'undefined') {
    jwtToken = JSON.parse(localStorage.getItem('user') || '{}')?.token;
  }
  let clonedRequest;
  if (jwtToken) {
    clonedRequest = req.clone({
      setHeaders: {
        Authorization: `Bearer ${jwtToken}`,
      },
    });
  } else {
    clonedRequest = req;
  }
  return next(clonedRequest);
}
