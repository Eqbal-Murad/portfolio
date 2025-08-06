import { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Sanitize error data before logging
    const sanitizedError = {
      message: error.message?.replace(/[\r\n]/g, ' '),
      stack: error.stack?.replace(/[\r\n]/g, ' ')
    };
    const sanitizedErrorInfo = {
      componentStack: errorInfo.componentStack?.replace(/[\r\n]/g, ' ')
    };
    
    console.error('Error caught by boundary:', sanitizedError, sanitizedErrorInfo);
    
    // Log to CloudWatch (in production)
    if (process.env.NODE_ENV === 'production') {
      this.logErrorToCloudWatch(sanitizedError, sanitizedErrorInfo);
    }
    
    this.setState({ error, errorInfo });
  }

  private logErrorToCloudWatch = (sanitizedError: any, sanitizedErrorInfo: any) => {
    // In a real implementation, you would send this to CloudWatch
    const errorData = {
      message: sanitizedError.message,
      stack: sanitizedError.stack,
      componentStack: sanitizedErrorInfo.componentStack,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent?.replace(/[\r\n]/g, ' '),
      url: window.location.href?.replace(/[\r\n]/g, ' '),
    };
    
    console.error('Error logged to CloudWatch:', errorData);
  };

  private handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center p-6">
          <div className="max-w-md w-full bg-slate-800 rounded-lg shadow-xl p-8 text-center">
            <div className="flex justify-center mb-6">
              <AlertTriangle className="text-red-400" size={48} />
            </div>
            
            <h1 className="text-2xl font-bold text-white mb-4">
              Oops! Something went wrong
            </h1>
            
            <p className="text-gray-300 mb-6">
              We're sorry, but something unexpected happened. The error has been logged and we'll look into it.
            </p>
            
            <button
              onClick={this.handleReload}
              className="flex items-center justify-center space-x-2 w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
            >
              <RefreshCw size={16} />
              <span>Reload Page</span>
            </button>
            
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mt-6 text-left">
                <summary className="text-gray-400 cursor-pointer mb-2">
                  Error Details (Development Only)
                </summary>
                <pre className="text-xs text-red-400 bg-slate-900 p-4 rounded overflow-auto">
                  {this.state.error.toString()}
                  {this.state.errorInfo?.componentStack}
                </pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;