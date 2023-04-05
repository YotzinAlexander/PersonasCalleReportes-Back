const {Router} = require('express');
const {check} = require('express-validator');
const {validarCampos} = require('../middlewares/validar-campos');
const { 
    crearUsuario, loginUsuario, revalidarToken, 
    reportPersonas, reportPersonasLocal, updateEvento, 
    searchReportePersonas, razonamientoCorpo, updateState, 
    reporteAsigna, allReportAsignados, ReportAsignados, 
    razonamientoCorpoOne, razonCorpo, crearCorpo, searchCorporaciones } = require('../controllers/auth');
const { validarJWT } = require('../middlewares/validar-jwt');

const router = Router();

router.post(
    '/new',
    [
        check('name', 'El nombre es obligatorio').not().isEmpty(),
        check('user', 'El nombre de usuaior es necesario').not().isEmpty(),
        check('password','La contraseña es necesaria').not().isEmpty(),
        validarCampos
    ],
    crearUsuario );

router.post(
    '/',
    [
        check('user','Se requiere un usuario').not().isEmpty(),
        check('password', 'Se requiere una contraseña').not().isEmpty(),
        validarCampos
    ], 
    loginUsuario);
router.post(
    '/createCorpo',
    [
        // check('name','Se requiere el nombre de la corporacion o institucion').not().isEmpty(),
        // validarCampos
    ],
    crearCorpo
)    

router.get('/corporaciones', 
    [

    ],
    searchCorporaciones,
)

router.get('/renew', validarJWT, revalidarToken);

router.get('/dataEventos',
    [
        
    ],
    //reportPersonas
    reportPersonasLocal);

router.patch('/updateEvento',
    [    ],
    updateEvento);

router.get('/searchReport',
    [    ],
    searchReportePersonas);

router.post('/razonamientoCorpo', 
    [    ],
    razonamientoCorpo );

router.post('/razonamientoCorpoOne', 
    [    ],
    razonamientoCorpoOne );  

router.get('/razonCorpo', 
    [    ],
    razonCorpo);    

router.patch('/actualizaState',
    [],
    updateState);

router.post('/reporteAsigna',
    [],
    reporteAsigna); 

router.get('/allReportAsignados',
    [],
    allReportAsignados);
    
router.post('/ReportAsignados',
    [],
    ReportAsignados);        
    


module.exports = router;