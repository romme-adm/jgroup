# Challenge GBM

#### Instalar y ejecutar los contenedores docker ubicados en los archivos en Installers/:

**_DockerInstallerRabbitMQ.bash_** , **_DockerInstallerRedis.bash_** y **_DockerInstallerSQLSERVER.bash_**

### Script de creacion de tablas SQLserver

* Ejecutar los scripts de la Carpeta Installers/Scripts de acuerdo al orden del prefijo.

#### Diagrama de arquitectura de la solución.
**_Challenge.drawio.png_**
![alt text for screen readers](./Challenge.drawio.png "diagrama de arquitectura")

#### Flujo de negocio

1.  Se debera crear la cuenta consumiendo el siguiente recurso:

> POST /gbm/challenge/v1/accounts
```
  {
  "cash": 0,
  "email": "string",
  "countryKey": "string"
}  
```
2.  Se debera indicar a la mini red de microservicios que se inician operaciones, se realiza consumiendo el siguiente servicio:

> POST /gbm/challenge/v1/accounts/prepare
```
{
  "invesmentId": 0,
  "ownerEmail": "string"
}
```
3.  Despues de iniciar operaciones, iniciar transacciones BUY/SELL


> POST /gbm/challenge/v1/accounts/{id}/orders
``` 
 Path
  id
```
```
 Request body BUY

	{
		  "operation": "string",
		  "issuer_Name": "string",
		  "total_Shares": 0,
		  "share__Price": 0
	}
 Request body SELL

	{
		  "operation": "string",
		  "issuer_Name": "string",
		  "total_Shares": 0,
		  "share__Price": 0,
		  "set_Id": "string"
	}
```
#### Descripcion de soluciones.

**_GBM.Challenge.API.CreateInvesment_** : 
> Se encarga de crear la cuenta de inversion.
**_GBM.Challenge.API.OpenTransactios_** : 
> Se encarga de iniciar operaciones.
**_GBM.Challenge.API.Transactions_** : 
> Se encarga de las transacciones BUY/SELL.

#### Tecnologías.

1. Redis
> Gracias a su velocidad y facilidad de uso, la seleccione ya que necesitamos procesar cientos de miles de transacciones por segundo.
2. SQLserver
> Guarda los datos de la cuenta de inversion.
3. RabbitMQ
> Bus de mensajes para lograr la comunicación entre la mini red de microservicios.
4. Docker
> Me permitio instalar varias tecnologías de manera local.

