<template>
	<transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-florish animated fadeInDown"></div>
        <div class="modal-florish dark animated fadeInUp"></div>
        <div class="modal-container">
        <button class="modal-close-button" @click="$emit('close')">
           <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 24 24" xml:space="preserve" width="24" height="24"><g class="nc-icon-wrapper"><path  d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"></path></g></svg>
          </button>
          <div class="modal-header">
            <slot name="header">
              <h2>Thank you for your interest!</h2>
            </slot>
          </div>
          <slot name="body">
          <p>I need just a bit of information from you and I will gladly be in touch with you as soon as possible.</p>
          <form action="https://getsimpleform.com/messages?form_api_token=5b8b4e4e1a13be50fc4f466e4be64422" method="post" class="inquiry__form">
            <div class="form-wrapper" >
              <div class="form-group" >
                <label for="name">Name</label>
                <input type="Name" name="Name" required class="input"/>
              </div>
              <div class="form-group">
                <label for="email">Email</label>
                <input type="email" name="email" required class="input"/>
              </div>
              <div class="form-group">
                <label for="phone">Phone Number</label>
                <input type="tel" name="phone" class="input"/>
              </div>
              <div class="form-group">
                <label for="message">What can I help you with?</label>
                <textarea name="message" required class="input textarea"/></textarea>
              </div>
            </div>
            <div class="form-group">
              <input type="submit" value="Send Message" class="submit"/>
              <button class="btn-cancel" @click="$emit('close')">Cancel</button>
            </div>
           </form>
          </slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<style scoped>
.modal-close-button {
  background: none;
  border: none;
  position: absolute;
  right: .25rem;
  top: .5rem;
  cursor: pointer;
}
.modal-close-button svg:hover {
  fill: #E6A200;
}
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .8);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 400px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  color: #333333;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: "Gibson-Regular", sans-serif;
  position: relative;
  z-index: 10;
}
@media screen and (max-width: 767px) {
  .modal-container { 
    width: 320px; 
    padding: 10px 20px;
  }
}

.modal-header h3 {
  margin-top: 0;
  color: #333333;
}

.modal-body {
  margin: 20px 0;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>