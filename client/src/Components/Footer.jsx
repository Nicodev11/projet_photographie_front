import React from 'react';

const Footer = () => {
  return (
    <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 border-top bg-dark">
      <div class="col-md-4 d-flex align-items-center">
        <span class=" ms-2 mb-3 mb-md-0 text-white">© 2023 Company, Inc</span>
      </div>
      <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
        <li class="ms-3"><a class="text-white" href="/"><i class="bi bi-facebook" width="24" height="24"></i></a></li>
        <li class="ms-3"><a class="text-white" href="/"><i class="bi bi-instagram" width="24" height="24"></i></a></li>
        <li class="ms-3"><a class="text-white me-3" href="/"><i class="bi-twitter" width="24" height="24"></i></a></li>
      </ul>
    </footer>
  );
};

export default Footer;