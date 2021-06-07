console.log('NODE_ENV: ', process.env.NODE_ENV);

if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
  window.addEventListener('load',
    () => {
      navigator.serviceWorker.register('/sw.js')
        .then(registration => {
          console.log('SW registered: ', registration);
          window.registration = registration;
          registration.update();
        })
        .catch(registrationError => {
          console.log('SW registration failed: ', registrationError);
        });

      navigator.serviceWorker.addEventListener('controllerchange', function () {
          if (window.swRefreshing) return;

          window.location.reload();
          window.swRefreshing = true;
        });
    }
  );
}
