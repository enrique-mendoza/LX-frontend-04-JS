import logo from '../../../assets/images/logo.png';

export const logoComponent = () => {
  const divLogo = `
    <div class="header__logo">
        <img src=${logo} alt="logo" class="logo" />
    </div>
    `;

  return divLogo;
};
