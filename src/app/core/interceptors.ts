import { HttpHeaders, HttpInterceptorFn } from '@angular/common/http';

export const csrfInterceptor: HttpInterceptorFn = (req, next) => {
  const getCookie = (name: string): string | null => {
    const match = document.cookie.match(new RegExp(`(^|;\\s*)${name}=([^;]*)`));
    return match ? decodeURIComponent(match[2]) : null;
  };

  const csrfToken = getCookie('csrftoken');

  const isModifyingMethod = ['POST', 'PUT', 'PATCH', 'DELETE'].includes(req.method.toUpperCase());

  // Immer mitCredentials setzen
  let modifiedReq = req.clone({ withCredentials: true });

  if (csrfToken && isModifyingMethod) {
    modifiedReq = modifiedReq.clone({
      setHeaders: {
        'X-CSRFToken': csrfToken
      }
    });
  }

  return next(modifiedReq);
};
