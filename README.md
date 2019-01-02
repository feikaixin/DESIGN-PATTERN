# JavaScript设计模式
## 首先了解es5的继承和es6的继承的区别
> ES5 的继承，实质是先创造子类的实例对象this，然后再将父类的方法添加到this上面（Parent.apply(this)）。ES6 的继承机制完全不同，实质是先将父类实例对象的属性和方法，加到this上面（所以必须先调用super方法），然后再用子类的构造函数修改this。
## 神奇的魔术师--简单工厂模式
> <font color='cyan'>简单工厂模式</font>：又叫静态工厂方法，由一个工厂对象决定创建某一种产品对象类的实例。主要用于创建同一类对象。

        团队项目的开发不同于个人开发，其对全局变量的限制很大，所以我们要尽量少的创建全局变量。对于同一类对象在不同的需求中的重复使用，很多时候不需要重复创建，代码复用是面向对象的一跳准则。通过对简单工厂来创建一些对象，可以让这些对象公用一些资源而又私有一些资源，这是一种很不错的开发实践，不过对于简单工厂模式，它的适用场合通常也就限制在创建单一对象

## 给我一张名片--工厂方法模式
> <font color='cyan'>工厂方法模式</font>：通过对产品类的抽象使其创建的业务主要负责用于创建多类产品的实例
    
        对于创建多类对象，前面学过的简单工厂模式就不适用了，这是简单工厂模式的应用局限，当然这正是工厂方法模式的价值所在，通过工厂方法模式我们可以轻松创建多个类的实例对象，这样工厂方法对象在创建对象的方式也避免了使用者和对象类之间的耦合，用户不必关心创建该对象的具体类，只需要调用工厂方法即可。
        在实践中，理想与现实总有一线之隔的，新来的同事很可能错误的直接调用工厂方法，这样就很有可能通过工厂方法执行中的this对象为全局对象添加全局变量，并且得不到期望的实例对象，此时一个安全的工厂对象则让我们吃了一颗定心丸。

## 出现的都是幻觉--抽象工厂模式
> <font color='cyan'>抽象工厂模式</font>：通过对类的工厂抽象使其业务用于对产品类簇的创建，而不负责创建一类产品的实例。
    
        抽象工厂模式是设计模式中最抽象的一种，也是创建模式中唯一一种抽象化创建模式。该模式创建的结果不是真实的实例对象，而是一个类簇，它制定了类的结构，这也就区别了简单工厂模式创建单一对象，工厂方法模式创建多类对象，当然由于JavaScript不支持抽象化创建于虚拟方法，所以导致这种模式不能像其他面向对象语言中应用的那么广泛。

## 分即是合--建造者模式
> <font color='cyan'>建造者模式</font>：将一个复杂对象的构建层与其表示层相互分离，同样的构建过程，可采用不同的表示

        工厂模式创建出来的是一个对象，她追求的是创建的结果，别无他求，多以那仅仅是一个实实在在的创建过程，而建造者模式就有所不同，她不仅仅可得到创建的结果，然而他参与了创建的具体过程，对于创建的具体细节也参与了干涉，可以说创建对象更复杂，或者说这种模式创建的对象时一个复合对象。
        但是这种模式对于整体对象类的拆分无形中增加了结构的复杂性。因此如果对象粒度很大，或者模块间的利用率不是很大且变动不是很大，我们最好还是要创建整体对象。

## 语言之魂--原型模式
> <font color='cyan'>原型模式</font>：用原型实例指向创建对象的类，使用于创建新的对象的类共享原型对象的属性及方法

        原型模式就是将可复用的，可共享的，耗时大的从基类中提取出来让后放在其原型中，然后子类通过组合继承或者寄生组合继承而将方法和属性继承下来，对于子类中那些需要重写的方法进行重写，这样子类创建的对象既具有子类的属性和方法也共享了积累的原型方法。
        原型模式可以让多个对象分享同一个原型对象的属性与方法，这也是一种继承方式，不过这种继承方式是不需要创建的，而是将原型对象分享给那些继承的对象，当然有时需要让每个继承对象独立拥有一份原型对象，此时我们需要将原型对象进行复制