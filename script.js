function whatsappUs() {
  const phoneNumber = "+917558830447";
  const message = "Hello";
  window.open(`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`, '_blank');
}
