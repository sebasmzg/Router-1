/* import Swal from "sweetalert2";

export const showLoading = function() {
    Swal.fire{
      title: 'Loading',
      allowEscapeKey: false,
      allowOutsideClick: false,
      timer: 2000,
      onOpen: () => {
        Swal.showLoading();
      }
    }.then(
      () => {},
      (dismiss:any) => {
        if (dismiss === 'timer') {
          console.log('closed by timer!!!!');
          Swal.fire({ 
            title: 'youre in',
            type: 'success',
            timer: 2000,
            showConfirmButton: false
          })
        }
      }
    )
};
 */