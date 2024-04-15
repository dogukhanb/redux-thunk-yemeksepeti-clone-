<h1>Redux Thunk<h1>

<h2>  React+Vite+Js - Redux Thunk kullanılarak hazırlanmış yemeksepeti clone sayfası.</h2>

<h3>redux-thunk-yemeksepeti-clone<h3>

<img src="redux-thunk-yemekspeti-clone.gif"/>

Reduxt tunk, redux kullanılan projelerde asenkron işlemleri kolaylaştırmak bileşen içerisndeki karışılığı azaltmak ve complex yapıyı bileşnin dışarısna taşımamıza olanak sağlar

Redux temel yapısı a ksiyonların senkron olması üzerine kuruludur. Yani bir eylem dispatch ile tetiklendiğinde bekleme süresi olmadan reducer'a ulaşmalı

Asenkron işlemlerle uğraşmak istediğimizde, redux thunk devereye girer. Thunk , action oluşturan fonksiyonların basit bir nesne döndürmesi yerine fonksiyon döndrümesine izin verir. Bu sayede aksiyon oluşturan bu fonksiyonların içerisnde api istekleri atılabilir
