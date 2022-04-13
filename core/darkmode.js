let darkmode;

flex.dark = status => {
    darkmode = !FlexJS.utils.isset(status) ? !darkmode : status;
    !darkmode ? document.body.classList.remove('dark') : document.body.classList.add('dark');
};