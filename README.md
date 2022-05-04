# Challenge GBM
# Guia de instalación

#### Instalar y ejecutar los contenedores docker ubicados en los archivos en:
**_DockerInstallerRabbitMQ.bash_** , **_DockerInstallerRedis.bash_** y **_DockerInstallerSQLSERVER.bash_**


#### Diagrama de arquitectura de la solución.
**_Challenge.drawio.png_**
![alt text for screen readers](./Challenge.drawio.png "diagrama de arquitectura")

#### Flujo de negocio

1. * Se debera crear la cuenta consumiendo el siguiente recurso:

> POST /gbm/challenge/v1/accounts

2. * Se debera indicar a la mini red de microservicios que se inician operaciones, se realiza consumiendo el siguiente servicio:

> POST /gbm/challenge/v1/accounts/prepare

3. * Despues de iniciar operaciones, iniciar transacciones BUY/SELL

> POST /gbm/challenge/v1/accounts/{id}/orders

#### Descripcion de soluciones.

**_GBM.Challenge.API.CreateInvesment_** : * Se encarga de crear la cuenta de inversion.
**_GBM.Challenge.API.OpenTransactios_** : * Se encarga de iniciar operaciones.
**_GBM.Challenge.API.Transactions_** : * Se encarga de las transacciones BUY/SELL.
