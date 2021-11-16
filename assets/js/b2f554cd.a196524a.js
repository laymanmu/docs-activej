"use strict";(self.webpackChunkactivejdocs=self.webpackChunkactivejdocs||[]).push([[1477],{30010:function(e){e.exports=JSON.parse('{"blogPosts":[{"id":"ActiveJ 5.0 - New major release","metadata":{"permalink":"/blog/2021/10/29/v5.0","source":"@site/blog/2021-10-29-v5.0.md","title":"ActiveJ 5.0 - New major release","description":"ActiveJ v5.0 was released Oct 29,","date":"2021-10-29T00:00:00.000Z","formattedDate":"October 29, 2021","tags":[],"readingTime":1.835,"truncated":false,"authors":[],"nextItem":{"title":"ActiveJ 4.3 - Small improvements for multiple modules","permalink":"/blog/2021/05/28/v4.3"}},"content":"ActiveJ v5.0 was released Oct 29,\\n2021 ([see on Maven](https://mvnrepository.com/artifact/io.activej/activej/5.0)). This release includes\\nmajor changes in [ActiveJ Inject](/inject), [ActiveJ Codegen](/codegen), [ActiveJ Serializer](/serializer)\\n[promises API](/async-io/promise). The release also introduced improved type scanning facility and \\noverall minor improvements in other components.\\n\\n* [ActiveJ Inject](/inject)\\n  * Refactored and simplified inner components to speed up dependency injection and provide better support for binding \\n[specialization](/specializer)\\n  * Simplified type resolution in dependency injection\\n  * Added the ability to transform imported and exported bindings using patterns (see [example](/inject/binding-transformation))\\n  * Replaced `@Optional` annotation with an explicit [OptionalDependency](https://github.com/activej/activej/blob/master/core-inject/src/main/java/io/activej/inject/binding/OptionalDependency.java)\\n  class\\n* [ActiveJ Codegen](/codegen)\\n  * Improved [ClassBuilder](https://github.com/activej/activej/blob/v5.0/core-codegen/src/main/java/io/activej/codegen/ClassBuilder.java) and [DefiningClassLoader](https://github.com/activej/activej/blob/v5.0-beta2/core-codegen/src/main/java/io/activej/codegen/DefiningClassLoader.java) classes\\n  * Class generation may now be 100% lazy\\n  * Added in-memory [ClassBuilder](https://github.com/activej/activej/blob/v5.0/core-codegen/src/main/java/io/activej/codegen/ClassBuilder.java) caches\\n  * Added the ability to use [BytecodeStorage](https://github.com/activej/activej/blob/v5.0/core-codegen/src/main/java/io/activej/codegen/BytecodeStorage.java) as a persistent cache for generated bytecode\\n  * Added the ability to call super methods as well as protected methods\\n  * Improved built-in expressions for array/collection/map iteration\\n* [ActiveJ Serializer](/serializer)\\n  * Added the ability to specify serializer annotations directly on type use (see [example](/serializer/examples#path-based-serialization))\\n  * Automatic class member ordering is now supported within the same JVM\\n  * Added support for serializer annotation aliases\\n  * Improved array serialization as well as serialization of booleans\\n  * Refactored class hierarchy of collection serializers. \\n  * Abstract collection serializers now support builder pattern\\n* [Promise](/async-io/promise)\\n  * Greatly improved exception handling\\n  * Renamed promise chaining methods `thenEx` and `mapEx` to `then` and `map`\\n  * Added new conditional chaining methods as well as dedicated null-handling chaining methods \\n  * All the changing methods now take \\"throwing\\" functions. If a checked exception is thrown in a chaining function, \\nthe whole promise is completed exceptionally\\n* Miscellaneous improvements\\n  * Removed `codec` module. Components that require JSON marshalling now internally use the \\n[DSL-JSON](https://github.com/ngs-doo/dsl-json) library  \\n  * Added new [types](https://github.com/activej/activej/tree/v5.0/util-types) module which contains various reflection and type utilities, including advanced type scanner\\n  * [Common](https://github.com/activej/activej/tree/v5.0-beta1/util-common) module has been massively refactored to make common functions and components more consistent\\n  * Restructured asynchronous exceptions\\n  * Unchecked exception handling can now be precisely configured using a thread-scoped or global \\n[FatalErrorHandler facility](https://github.com/activej/activej/blob/master/util-common/src/main/java/io/activej/common/exception/FatalErrorHandler.java) \\n  * Made ActiveJ compatible with Java 17\\n  * Added various `DiscoveryService` interfaces for node discovery within server cluster ([RPC](/rpc), [FS](/fs))\\n  * Removed `AsyncServletDecorator` facility\\n  * Removed `StreamCodecRegistry` facility\\n  * Multiple small improvements and fixes"},{"id":"ActiveJ 4.3 - Small improvements for multiple modules","metadata":{"permalink":"/blog/2021/05/28/v4.3","source":"@site/blog/2021-05-28-v4.3.md","title":"ActiveJ 4.3 - Small improvements for multiple modules","description":"ActiveJ v4.3 was released May 28,","date":"2021-05-28T00:00:00.000Z","formattedDate":"May 28, 2021","tags":[],"readingTime":0.535,"truncated":false,"authors":[],"prevItem":{"title":"ActiveJ 5.0 - New major release","permalink":"/blog/2021/10/29/v5.0"},"nextItem":{"title":"ActiveJ 4.2 - Expanded functionality","permalink":"/blog/2021/04/13/v4.2"}},"content":"ActiveJ v4.3 was released May 28,\\n2021 ([see on Maven](https://mvnrepository.com/artifact/io.activej/activej/4.3)). This release introduced\\nsmall improvements for multiple modules.\\n\\n* Added new method `onConnecting` to [AsyncHttpClient](https://github.com/activej/activej/blob/v4.3/core-http/src/main/java/io/activej/http/AsyncHttpClient.java)\\n  \'s `Inspector`. Now, the number of connection that are being\\n  established can be monitored via `JmxInspector#getConnecting` attribute\\n* When HTTP connection closes, the proper exception is propagated to HTTP request and response body suppliers\\n* [ThrottlingController](https://github.com/activej/activej/blob/v4.3/core-eventloop/src/main/java/io/activej/eventloop/inspector/ThrottlingController.java)\\n  now throttles all the processing if tasks consecutively execute for abnormally long time\\n* [ForwardingStreamSupplier](https://github.com/activej/activej/blob/v4.3/core-datastream/src/main/java/io/activej/datastream/ForwardingStreamSupplier.java)\\n  now correctly binds peer `StreamSupplier` to `StreamConsumer`\\n* Fixed asynchronous recursion in [ChannelSerializer](https://github.com/activej/activej/blob/v4.3/core-datastream/src/main/java/io/activej/datastream/csp/ChannelSerializer.java)\\n* Missing measures in [Aggregation](https://github.com/activej/activej/blob/v4.3/extra/cloud-lsmt-aggregation/src/main/java/io/activej/aggregation/Aggregation.java)\\n  are initialized with default \'zero\' values\\n* [HyperLogLog](https://github.com/activej/activej/blob/v4.3/extra/cloud-lsmt-aggregation/src/main/java/io/activej/aggregation/measure/HyperLogLog.java)\\n  now correctly adds `int` values"},{"id":"ActiveJ 4.2 - Expanded functionality","metadata":{"permalink":"/blog/2021/04/13/v4.2","source":"@site/blog/2021-04-13-v4.2.md","title":"ActiveJ 4.2 - Expanded functionality","description":"ActiveJ v4.2 was released Apr 13, 2021 (see on Maven). This release expanded","date":"2021-04-13T00:00:00.000Z","formattedDate":"April 13, 2021","tags":[],"readingTime":0.745,"truncated":false,"authors":[],"prevItem":{"title":"ActiveJ 4.3 - Small improvements for multiple modules","permalink":"/blog/2021/05/28/v4.3"},"nextItem":{"title":"ActiveJ 4.1 - Optimization and simplification","permalink":"/blog/2021/03/19/v4.1"}},"content":"ActiveJ v4.2 was released Apr 13, 2021 ([see on Maven](https://mvnrepository.com/artifact/io.activej/activej/4.2)). This release expanded\\nfunctionality of some components.\\n\\n* **[ActiveJ Redis client](https://github.com/activej/activej/tree/v4.2/extra/cloud-redis)**\\n    * Added `connect()` methods\\n      to [RedisClient](https://github.com/activej/activej/blob/v4.2/extra/cloud-redis/src/main/java/io/activej/redis/RedisClient.java)\\n      that take up authentication credentials\\n    * Added new specialized exceptions for ActiveJ Redis module:\\n        - [RedisAuthenticationException](https://github.com/activej/activej/blob/v4.2/extra/cloud-redis/src/main/java/io/activej/redis/RedisAuthenticationException.java)\\n        - [RedisPermissionException](https://github.com/activej/activej/blob/v4.2/extra/cloud-redis/src/main/java/io/activej/redis/RedisPermissionException.java)\\n* **[RecordScheme](https://github.com/activej/activej/blob/v4.2/core-codegen/src/main/java/io/activej/record/RecordScheme.java)**\\n    * Added ability to specify fields in `RecordScheme` that would be used for `equals()` and `hashCode()` implementation\\n    * Added ability to specify fields that would be used to generate a record `Comparator`\\n* **[FileLocker](https://github.com/activej/activej/blob/v4.2/util-common/src/main/java/io/activej/common/FileLocker.java)**\\n    * Made `FileLocker` constructors public\\n    * `FileLocker` now implements `java.io.Closeable` interface\\n* **[StateManager](https://github.com/activej/activej/blob/v4.2/util-state/src/main/java/io/activej/state/StateManager.java)**\\n    * Added `tryLoadSnapshot()` and `tryLoadDiff()` methods that return `null` rather than throwing an exception\\n    * Added `tryLoad()` method to [FileStateManager](https://github.com/activej/activej/blob/v4.2/util-state/src/main/java/io/activej/state/file/FileStateManager.java)\\n      that returns `null` rather than throwing an exception\\n    * Added `save()` method to [FileStateManager](https://github.com/activej/activej/blob/v4.2/util-state/src/main/java/io/activej/state/file/FileStateManager.java)\\n      that takes up a revision for the state to be saved with\\n* Improved processing of HTTP requests with large URLs"},{"id":"ActiveJ 4.1 - Optimization and simplification","metadata":{"permalink":"/blog/2021/03/19/v4.1","source":"@site/blog/2021-03-19-v4.1.md","title":"ActiveJ 4.1 - Optimization and simplification","description":"ActiveJ v4.1 was released Mar 19, 2021 (see on Maven).","date":"2021-03-19T00:00:00.000Z","formattedDate":"March 19, 2021","tags":[],"readingTime":0.83,"truncated":false,"authors":[],"prevItem":{"title":"ActiveJ 4.2 - Expanded functionality","permalink":"/blog/2021/04/13/v4.2"},"nextItem":{"title":"ActiveJ 4.0 - Refactoring of exceptions","permalink":"/blog/2021/02/16/v4.0"}},"content":"ActiveJ v4.1 was released Mar 19, 2021 ([see on Maven](https://mvnrepository.com/artifact/io.activej/activej/4.1)).\\nThis release included optimization and simplification of HTTP code, expanding functionality of some components.\\n\\n* **HTTP refactoring and optimizations**\\n    * Optimized and simplified processing of incoming HTTP messages, headers and URLs\\n    * Added preconditions for an HTTP message which guard against using recycled messages\\n    * User-created HTTP messages ([HttpRequest](https://github.com/activej/activej/blob/v4.1/core-http/src/main/java/io/activej/http/HttpRequest.java)\\n      for [AsyncHttpClient](https://github.com/activej/activej/blob/v4.1/core-http/src/main/java/io/activej/http/AsyncHttpClient.java) /\\n      [HttpResponse](https://github.com/activej/activej/blob/v4.1/core-http/src/main/java/io/activej/http/HttpResponse.java) in\\n      [AsyncServlet](https://github.com/activej/activej/blob/v4.1/core-http/src/main/java/io/activej/http/AsyncServlet.java)) are not recycled anymore\\n      (only message body is recycled if present), thus making it possible to cache and reuse them\\n* Added `Promise<Void> fetch()` method to [OTStateManager](https://github.com/activej/activej/blob/v4.1/extra/cloud-ot/src/main/java/io/activej/ot/OTStateManager.java).\\n  Fetched changes are stored without being applied to the current state.\\n* Improved casting of deserialized fields in [ActiveJ Serializer](https://serializer.activej.io/)\\n* Added default [Initializer](https://github.com/activej/activej/blob/v4.1/util-common/src/main/java/io/activej/common/api/Initializer.java)s\\n  for common components\\n* Added preconditions when applying operations to [LogOTState](https://github.com/activej/activej/blob/v4.1/extra/cloud-etl/src/main/java/io/activej/etl/LogOTState.java)\\n* Removed [JmxModule](https://github.com/activej/activej/blob/v4.1/boot-jmx/src/main/java/io/activej/jmx/JmxModule.java) from common HTTP launchers\\n* Added new JMX stats to [RpcClient](https://github.com/activej/activej/blob/v4.1/cloud-rpc/src/main/java/io/activej/rpc/client/RpcClient.java)\\n  for monitoring unresponsive RPC servers\\n* Added [ApplicationSettings](https://github.com/activej/activej/blob/v4.1/util-common/src/main/java/io/activej/common/ApplicationSettings.java)\\n  method for obtaining a default `Locale`\\n* Stick to using `en-US` locale when formatting [EventStats](https://github.com/activej/activej/blob/v4.1/boot-jmx-stats/src/main/java/io/activej/jmx/stats/EventStats.java)\\n  and [ValueStats](https://github.com/activej/activej/blob/v4.1/boot-jmx-stats/src/main/java/io/activej/jmx/stats/ValueStats.java)"},{"id":"ActiveJ 4.0 - Refactoring of exceptions","metadata":{"permalink":"/blog/2021/02/16/v4.0","source":"@site/blog/2021-02-16-v4.0.md","title":"ActiveJ 4.0 - Refactoring of exceptions","description":"ActiveJ v4.0 was released Feb 16, 2021 (see on Maven).","date":"2021-02-16T00:00:00.000Z","formattedDate":"February 16, 2021","tags":[],"readingTime":1.335,"truncated":false,"authors":[],"prevItem":{"title":"ActiveJ 4.1 - Optimization and simplification","permalink":"/blog/2021/03/19/v4.1"}},"content":"ActiveJ v4.0 was released Feb 16, 2021 ([see on Maven](https://mvnrepository.com/artifact/io.activej/activej/4.0)).\\nThis release included major refactoring of exceptions. This release also introduces asynchronous high-performance\\nActiveJ Redis client. Other components were optimized for the performance.\\n\\n* **Exceptions refactoring**\\n    * All public constant exceptions were removed/hidden.\\n    * **StacklessException** was removed. Classes that extended **StacklessException** now extend regular **Exception**,\\n      some of them are still *stackless*. *Stackless* exceptions provide the ability to include stack trace for debugging purposes.\\n      This can be achieved by setting exception\'s [ApplicationSetting](https://github.com/activej/activej/blob/v4.0/util-common/src/main/java/io/activej/common/ApplicationSettings.java)\\n      `withStackTrace` to **true**.\\n    * Renamed exceptions:\\n        * **ParseException** -> [MalformedDataException](https://github.com/activej/activej/blob/v4.0/util-common/src/main/java/io/activej/common/exception/MalformedDataException.java)\\n        * **HttpException** -> [HttpError](https://github.com/activej/activej/blob/v4.0/core-http/src/main/java/io/activej/http/HttpError.java)\\n          ([HttpException](https://github.com/activej/activej/blob/v4.0/core-http/src/main/java/io/activej/http/HttpException.java)\\n          is now a parent class for other HTTP exceptions)\\n        * **OTTransformException** -> [TransformException](https://github.com/activej/activej/blob/v4.0/extra/cloud-ot/src/main/java/io/activej/ot/exception/TransformException.java)\\n        * **OTNoCommitException** -> [NoCommitException](https://github.com/activej/activej/blob/v4.0/extra/cloud-ot/src/main/java/io/activej/ot/exception/NoCommitException.java)\\n    * Added new exceptions for top-level components, etc.\\n* Introduced asynchronous lightweight high-performance [ActiveJ Redis Client](https://github.com/activej/activej/tree/v4.0/extra/cloud-redis)\\n  with extendable API. [Examples](https://github.com/activej/activej/tree/v4.0/examples/cloud/redis) and [benchmarks](https://github.com/activej/activej/tree/v4.0/benchmarks/redis)\\n  for Redis client were added as well.\\n* Optimizations in network code, HTTP processing (especially in pipelining mode), and data serialization.\\n* Renamed **ByteBufQueue** -> [ByteBufs](https://github.com/activej/activej/blob/v4.0/core-bytebuf/src/main/java/io/activej/bytebuf/ByteBufs.java).\\n  Added byte index to **ByteScanner**, refactored `ByteBufs::scanBytes`.\\n  Added `ByteBufs::consumeBytes` method that works like `ByteBufs::scanBytes`, but actually consumes scanned bytes/bufs.\\n* Removed **StreamMapper**, now stream mapping can be achieved via `StreamFilter.mapper(Function<I, O>)`\\n* Removed **Transducer**, **StreamTransducer**, **AbstractStreamReducer**, **StreamMerger** classes. Merging of streams can be\\n  done via [StreamReducer](https://github.com/activej/activej/blob/v4.0/core-datastream/src/main/java/io/activej/datastream/processor/StreamReducer.java)\\n* Renamed **MergeSortReducer** -> **MergeReducer**, **MergeDistinctReducer** -> **DeduplicateReducer**\\n* Added ability to obtain irrelevant chunks from [Cube](https://github.com/activej/activej/blob/v4.0/extra/cloud-lsmt-cube/src/main/java/io/activej/cube/Cube.java)\\n  by calling `Cube::getIrrelevantChunks`. Irrelevant chunks can be cleaned up by calling `CubeConsolidationController::cleanupIrrelevantChunks`.\\n* Added JUnit test rule [ClassBuilderConstantsRule](https://github.com/activej/activej/blob/v4.0/test/src/main/java/io/activej/test/rules/ClassBuilderConstantsRule.java)\\n  which validates that all of the [ClassBuilder](https://github.com/activej/activej/blob/v4.0/core-codegen/src/main/java/io/activej/codegen/ClassBuilder.java)\'s\\n  static constants are cleared after test passes.\\n* Renamed most classes/methods that contained *parse* to contain *decode* instead."}]}')}}]);